import axios from 'axios'
import { GetStaticPropsContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import { MenuItem } from '../../interfaces/menu.interface'
import { ITopPageModel } from '../../interfaces/page.interface'
import { IProductModel } from '../../interfaces/product.interface'
import { withLayout } from '../../layout/Layout'

interface ICourseProps extends Record<string, unknown> {
  page: ITopPageModel
  products: IProductModel[]
}
function Course({ page, products }: ICourseProps) {
  return <div>{123}</div>
}

export default withLayout(Course)

export async function getStaticPaths() {
  const firstCategory = 0

  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}top-page/find`,
    { firstCategory },
  )
  return {
    paths: menu.flatMap((item) => item.pages.map((page) => `/courses/${page.alias}`)),
    fallback: true,
  }
}
export async function getStaticProps({ params }: GetStaticPropsContext<ParsedUrlQuery>) {
  if (!params?.alias) {
    return {
      notFound: true,
    }
  }

  const { data: page } = await axios.get<ITopPageModel>(
    `${process.env.NEXT_PUBLIC_DOMAIN}top-page/byAlias/${params.alias}`,
  )
  const { data: products } = await axios.post<IProductModel>(
    `${process.env.NEXT_PUBLIC_DOMAIN}product/find`,
    { category: page.alias, limit: 10 },
  )

  return {
    props: {
      page,
      products,
    },
  }
}
