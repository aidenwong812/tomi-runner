declare namespace NodeJS {
  export interface ProcessEnv {
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    MICROSOFT_ENTRA_ID_SECRET: string;
    MICROSOFT_ENTRA_ID_ID: string;
    MICROSOFT_ENTRA_ID_TENANT_ID: string;
  }
}