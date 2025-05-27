import React from 'react'
import DevToBlogList from '@/components/dev-to-blog-list/DevToBlogList'
import CategoriesSection from '@/components/categories-section/CategoriesSection'

const page = () => {
    return (
        <>
            <DevToBlogList tag="technology" />
            <CategoriesSection />
        </>
    )
}

export default page