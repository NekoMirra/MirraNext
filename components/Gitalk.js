import { siteConfig } from '@/lib/config'
import { loadExternalResource } from '@/lib/utils'
import { useEffect } from 'react'

/**
 * gitalk评论插件
 * @param {*} param0
 * @returns
 */
const Gitalk = ({ frontMatter }) => {
  const gitalkCSSCDN = siteConfig('COMMENT_GITALK_CSS_CDN_URL')
  const gitalkJSCDN = siteConfig('COMMENT_GITALK_JS_CDN_URL')
  const clientId = "Ov23liRKHQu3ukVR2Hku"
  const clientSecret = "ee9e6d9c1ec917e59e88a2b954a234a057edc29f"
  const repo = "MirraNext-Talk"
  const owner = "NekoMirra"
  const admin = "NekoMirra"
  const distractionFreeMode = siteConfig('COMMENT_GITALK_DISTRACTION_FREE_MODE')

  const loadGitalk = async() => {
    await loadExternalResource(gitalkCSSCDN, 'css')
    await loadExternalResource(gitalkJSCDN, 'js')
    const Gitalk = window.Gitalk
    if (!Gitalk) {
      // 可以加入延时重试
      console.warn('Gitalk 初始化失败')
      return
    }
    const gitalk = new Gitalk({
      clientID: clientId,
      clientSecret: clientSecret,
      repo: repo,
      owner: owner,
      admin: admin,
      id: frontMatter.id, // Ensure uniqueness and length less than 50
      distractionFreeMode: distractionFreeMode // Facebook-like distraction free mode
    })

    gitalk.render('gitalk-container')
  }

  useEffect(() => {
    loadGitalk()
  }, [])

  return (
    <>
      <div id="gitalk-container"></div>
      <div className="text-center mt-5 text-gray-500 text-sm">
        <button 
          onClick={() => loadGitalk()} 
          className="hover:text-black transition-colors duration-200"
        >
          重新加载评论 | 初始化评论区
        </button>
      </div>
    </>
  )
}

export default Gitalk
