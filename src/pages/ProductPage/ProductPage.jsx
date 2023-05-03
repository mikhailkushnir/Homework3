import React, { useEffect, useState } from 'react'
import { Product } from "../../components/Product/Product"
import { api } from '../../utils/api'
import { useLocation, useNavigate, useParams } from 'react-router-dom'


export const ProductPage = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const res = useParams();

    const navigate = useNavigate()

    const location = useLocation();

    useEffect(() => {
        if (id) {
            api.getProductById(id).then((data) => setProduct(data))
        }
    }, [id])

    return (
        <>
            <Product product={product} />
        </>
    )
}