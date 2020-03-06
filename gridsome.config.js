// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-ghost',
      options: {
        typeName: 'Ghost',
        baseUrl: process.env.SF_GHOST_URL,
        contentKey: process.env.SF_GHOST_KEY,
        version: 'v3'
      }
    },
    {
      use: 'gridsome-plugin-blog-cover',
      options: {
        typeName: 'GhostPost',
        coverField: 'og_image',
        backgroundColors: ['#13171b'],
        imgWidth: '700px',
        imgHeight: '650px',
        border: false,
        domain: 'https://smokeyfro.com',
        outputDir: './static',
        cloud_name: 'smokeyfro',
        api_key: process.env.SF_CLOUDINARY_KEY,
        api_secret: process.env.SF_CLOUDINARY_SECRET,
        upload_folder: 'tuts/covers'
      }
    },
  ],
  templates: {
    GhostPost: '/:year/:month/:day/:slug'
  }
}