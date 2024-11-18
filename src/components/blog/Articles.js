import React from 'react'
import Image from 'next/image'

const Articles = ({ posts = [] }) => {
  const count = posts.length === 1 ? `1 Post` : `${posts.length} Posts`

  return (
    <div className="container mt-5 content-space-b-1 content-space-b-md-3">
      {/* <h3 className="text-end fs-5">Total posts: {count}</h3> */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {' '}
        {/* Updated classes for responsive layout */}
        {posts.map((post) => (
          <div key={post._id} className="col mb-4">
            <a
              href={`/blog/${post.slug.current}`}
              className="bg-light text-decoration-none"
            >
              <div className="card">
                {post.mainImage && (
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                )}
                <div className="card-body">
                  <p className="text-muted fs-8 mb-2">
                    {post.categories.map((category, index) => (
                      <span key={index}>
                        {category}
                        {index < post.categories.length - 1 && ' > '}
                      </span>
                    ))}
                  </p>
                  <h4 className="card-title">{post.title}</h4>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Articles
