/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['lucide-react'],
    webpack: (config, { isServer }) => {
        const imageLoaderRule = config.module.rules.find(
            (rule) => rule.test && rule.test.test && rule.test.test('.png')
        );
        if (imageLoaderRule) {
            imageLoaderRule.exclude = /\.(png|jpe?g|gif|webp|svg)$/i;
        }

        config.module.rules.push({
            test: /\.(png|jpe?g|gif|webp|svg)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'static/media/[name].[hash:8][ext]',
            }
        });
        return config;
    }
};

export default nextConfig;
