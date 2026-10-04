import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  devIndicators: false,
  experimental: {
    // Thread workers also support restricted Windows development environments.
    workerThreads: true,
    cpus: 2,
    useTypeScriptCli: false,
  },
};

export default nextConfig;
