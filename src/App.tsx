import type { Component } from 'solid-js'

const App: Component = () => {
  return (
    <div class="px-10 sm:px-20 mb-20">
      <h1 class="mt-20 w-full text-center text-3xl font-cutiveMono">NICOSEARCH</h1>
      <p class="mt-10 w-full text-center text-xl text-gray-500">
        <a class="underline text-gray-800" href="https://nicosearch.pages.dev/">新サイト</a>に移行しました
      </p>
      <div class="text-center text-gray-500 mt-10">
        <hr class="h-0.5 my-3" />
        <p>
          NICOSEARCHは
          <a href="https://www.nicovideo.jp" class="underline">
            ニコニコ動画®︎
          </a>
          公式のものではありません。
        </p>
        <p>
          <a href="https://github.com/pnsk-lab/nicosearch" class="underline">
            GitHub Repository
          </a>
        </p>
      </div>
    </div>
  )
}

export default App
