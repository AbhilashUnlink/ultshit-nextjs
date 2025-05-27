import CategoriesSection from '@/components/categories-section/CategoriesSection';
import React from 'react'

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            {children}
            <CategoriesSection />
        </>
    )
}

export default layout