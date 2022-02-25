import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { sanityClient, urlForImage } from '../sanity'
import { Post } from '../typings'

interface Props {
  posts: [Post]
}

export default function Home({ posts }: Props) {
  return (
    <div className="">
      <Head>
        <title>Edward Salcedo - Portfolio</title>
        <link rel="icon" href="/artist-emoji.png" />
      </Head>
      <Header />
      <div className=" smasonry masonry mx-auto max-h-full max-w-7xl space-y-2 px-5 pt-28 sm:pt-20 xl:px-0 ">
        {posts.map((post) => (
          <div key={post._id} className=" break-inside">
            <div>
              <img
                src={urlForImage(post.mainImage.asset).url()!}
                className="shadow-xl transition-all duration-300 md:hover:scale-105	  "
              />
            </div>
            <div className="">
              <h2>{post.title}</h2>
              <p>{post.dimensions}</p>
              <p>{post.year}</p>
            </div>
          </div>
        ))}
      </div>
      <footer className="text-darkbrown block w-full items-center justify-center py-10 text-center ">
        <a href="https://www.jorgemar.me" target="_blank">
          Made with ❤️ by <span className="underline">Jorgemar</span> from 🇩🇴
        </a>
      </footer>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author => {
    name
  },
  mainImage,
  dimensions,
  slug,
  year
  } | order(dimensions asc)`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}
