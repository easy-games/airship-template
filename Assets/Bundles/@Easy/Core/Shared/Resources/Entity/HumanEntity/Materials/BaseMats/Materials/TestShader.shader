Shader "Unlit/TestShader"
{
    Properties
    {
        _MainTex ("Diffuse", 2D) = "white" {}
        _Normal ("Normal Map", 2D) = "bump" {}
    }
    SubShader
    {
        Name "Forward"
        Tags { "LightMode" = "AirshipForwardPass" }

        Pass
        {
            CGPROGRAM
            //Main programs
            #pragma vertex vert
            #pragma fragment frag

            //Multi shader vars (you need these even if you're not using them, so that material properties can survive editor script reloads)
            float VERTEX_LIGHT;  
            float SLIDER_OVERRIDE;
            float POINT_FILTER;
            float EXPLICIT_MAPS;
            float EMISSIVE;
            float RIM_LIGHT;
            float INSTANCE_DATA;

            #include "UnityCG.cginc"
            
            half3 globalSunDirection = normalize(half3(-1, -3, 1.5));

            struct VertData
            {
                float4 vertex : POSITION;
                float3 normal : NORMAL;
                float4 tangent : TANGENT;
                float2 UV : TEXCOORD0;
            };

            struct VertToFrag
            {
                float4 vertex : SV_POSITION;
                float2 uv : TEXCOORD0;
                // these three vectors will hold a 3x3 rotation matrix
                // that transforms from tangent to world space
                half3 tspace0 : TEXCOORD1; // tangent.x, bitangent.x, normal.x
                half3 tspace1 : TEXCOORD2; // tangent.y, bitangent.y, normal.y
                half3 tspace2 : TEXCOORD3; // tangent.z, bitangent.z, normal.z
                float3 viewDir : TEXCOORD4;
            };

            sampler2D _MainTex;
            sampler2D _Normal;

            VertToFrag vert (VertData v)
            {
                VertToFrag o;
                o.uv = v.UV;
                o.vertex = UnityObjectToClipPos(v.vertex);
                o.viewDir = WorldSpaceViewDir(v.vertex);
                
                half3 wNormal = UnityObjectToWorldNormal(v.normal);
                half3 wTangent = UnityObjectToWorldDir(v.tangent.xyz);
                // compute bitangent from cross product of normal and tangent
                half tangentSign = v.tangent.w * unity_WorldTransformParams.w;
                half3 wBitangent = cross(wNormal, wTangent) * tangentSign;
                
                // output the tangent space matrix
                o.tspace0 = half3(wTangent.x, wBitangent.x, wNormal.x);
                o.tspace1 = half3(wTangent.y, wBitangent.y, wNormal.y);
                o.tspace2 = half3(wTangent.z, wBitangent.z, wNormal.z);
                
                return o;
            }

            void frag (VertToFrag i, out half4 MRT0 : SV_Target0, out half4 MRT1 : SV_Target1)
            {
                // sample the texture
                fixed4 col = tex2D(_MainTex, i.uv);
                
                // sample the normal map, and decode from the Unity encoding
                half3 tnormal = UnpackNormal(tex2D(_Normal, i.uv));
                // transform normal from tangent to world space
                half3 worldNormal;
                worldNormal.x = dot(i.tspace0, tnormal);
                worldNormal.y = dot(i.tspace1, tnormal);
                worldNormal.z = dot(i.tspace2, tnormal);

                float lightStrength = 1-dot(globalSunDirection, worldNormal);
                
                MRT0 = half4(lightStrength,lightStrength,lightStrength,1);
                MRT1 = half4(0,0,0,1);
            }
            ENDCG
        }
    }
}
