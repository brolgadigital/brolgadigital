import CMS from 'netlify-cms-app'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import PortfolioPagePreview from './preview-templates/PortfolioPagePreview'

CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('portfolio', PortfolioPagePreview)