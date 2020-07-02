---
title: "COTA'S KITCHEN"
date: "2020-05-04"
---

This is a new job!

## Topics Covered

1. Gatsby
2. GraphQL
3. React

                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )
                })}
ここの記述で引っかかった
mapメソッド、edges edge　があることとか。

引数 edge は本来何でも良い
x とおいて考えればいい
// edges - [0,1]
このそれぞれの値がそれぞれ一旦xと置かれる。