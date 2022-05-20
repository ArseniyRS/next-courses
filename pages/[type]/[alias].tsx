import axios from 'axios'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import { firstLevelMenu } from '../../helpers/helpers'
import { IMenuItem } from '../../interfaces/menu.interface'
import { ETopLevelCategory, ITopPageModel } from '../../interfaces/page.interface'
import { IProductModel } from '../../interfaces/product.interface'
import { withLayout } from '../../layout/Layout'

interface ICourseProps extends Record<string, unknown> {
  page: ITopPageModel
  products: IProductModel[]
  menu: IMenuItem[]
  firstCategory: ETopLevelCategory
}
function Course({ page, products, menu, firstCategory }: ICourseProps) {
  return <div>{123}</div>
}

export default withLayout(Course)

export async function getStaticPaths() {
  let paths: string[] = []
  firstLevelMenu.forEach(async (m) => {
    const { data: menu } = await axios.post<IMenuItem[]>(
      `${process.env.NEXT_PUBLIC_DOMAIN}top-page/find`,
      { firstCategory: m.id },
    )
    paths = paths.concat(
      menu.flatMap((item) => item.pages.map((page) => `${m.route}/${page.alias}`)),
    )
  })
  return {
    paths,
    fallback: true,
  }
}
export const getStaticProps: GetStaticProps<ICourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  const firstCategoryItem = firstLevelMenu.find((menu) => menu.route === params?.type)
  if (!params?.alias || !firstCategoryItem) {
    return {
      notFound: true,
    }
  }
  try {
    const { data: page } = await axios.get<ITopPageModel>(
      `${process.env.NEXT_PUBLIC_DOMAIN}top-page/byAlias/${params.alias}`,
    )
    const { data: products } = await axios.post<IProductModel>(
      `${process.env.NEXT_PUBLIC_DOMAIN}product/find`,
      { category: page.alias, limit: 10 },
    )
    const { data: menu } = await axios.post<IMenuItem[]>(
      `${process.env.NEXT_PUBLIC_DOMAIN}top-page/find`,
      { firstCategory: firstCategoryItem.id },
    )
    if (!menu.length) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products,
      },
    }
  } catch {
    return {
      notFound: true,
    }
  }
}
