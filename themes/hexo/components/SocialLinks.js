import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import React from 'react'
import Link from 'next/link'
import { TelegramIcon, HomeIcon } from './Icons' // 确保添加这些图标组件

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center space-x-3 mt-4">
      {/* Telegram链接 */}
      <Link 
        href={CONFIG.HEXO_TELEGRAM_LINK} 
        target="_blank"
        className="hexo-btn flex items-center text-blue-500 hover:text-blue-600 p-2"
      >
        <TelegramIcon className="mr-1" />
        <span>交流频道</span>
      </Link>
      
      {/* 个人主页链接 */}
      <Link 
        href={CONFIG.HEXO_PERSONAL_SITE}
        target="_blank"
        className="hexo-btn flex items-center text-green-500 hover:text-green-600 p-2"
      >
        <HomeIcon className="mr-1" />
        <span>个人主页</span>
      </Link>
    </div>
  )
}

export default SocialLinks
