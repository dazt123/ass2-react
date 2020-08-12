import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../pages/layouts/Main'
import MainAdmin from '../pages/layouts/MainAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'

//Views
import About from '../pages/views/Main/Blog'
import Home from '../pages/views/Main/Home'
import AddProduct from '../pages/views/Admin/Products/AddProducts';
import DetailProducts from '../pages/views/Admin/Products/DetailsProducts'
import SingleProducts from '../pages/views/Main/SingleProducts';
import EditProducts from '../pages/views/Admin/Products/EditProducts';
import CategoryManager from '../pages/views/Admin/Category';
import AddCategory from '../pages/views/Admin/Category/AddCategory';
import EditCategory from '../pages/views/Admin/Category/EditCategory';
import PostManager from '../pages/views/Admin/Post';
import AddPost from '../pages/views/Admin/Post/AddPost';
import EditPost from '../pages/views/Admin/Post/EditPost';
import Blog from '../pages/views/Main/Blog';


const Routers = ({ products, category, onRemove, onAdd, onUpdate, onRemoveCate, onAddCate, onUpdateCate, post, onAddPost, onRemovePost, onUpdatePost }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const onHandleAdd = (product) => {
        onAdd(product)
    }
    const onHandleUpdate = (id, product) => {
        onUpdate(id, product)
    }
    const onHandleRemoveCate = (id) => {
        onRemoveCate(id)
    }
    const onHandleAddCate = (cate) => {
        onAddCate(cate)
    }
    const onHandleUpdateCate = (id, category) => {
        onUpdateCate(id, category)
    }
    const onHandleAddPost = (post) => {
        onAddPost(post)
    }
    const onHandleRemovePost = (id) => {
        onRemovePost(id)
    }
    const onHandleUpdatePost = (id, post) => {
        onUpdatePost(id, post)
    }


    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?/:path?" exact>
                    <MainAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/products' exact>
                                <ProductsManager products={products} onRemove={onHandleRemove} category={category} />
                            </Route>
                            <Route path='/admin/addproducts'>
                                <AddProduct onAdd={onHandleAdd} />
                            </Route>
                            <Route path='/admin/detail-product/:id'>
                                <DetailProducts products={products} />
                            </Route>
                            <Route path='/admin/products/edit/:id'>
                                <EditProducts onUpdate={onHandleUpdate} products={products} />
                            </Route>
                            <Route path='/admin/category' exact>
                                <CategoryManager category={category} onRemoveCate={onHandleRemoveCate} />
                            </Route>
                            <Route path='/admin/add-category'>
                                <AddCategory onAddCate={onHandleAddCate} />
                            </Route>
                            <Route path='/admin/category/edit/:id'>
                                <EditCategory onUpdateCate={onHandleUpdateCate} category={category} />
                            </Route>
                            <Route path='/admin/post' exact>
                                <PostManager post={post} onRemovePost={onHandleRemovePost} />
                            </Route>
                            <Route path='/admin/addpost'>
                                <AddPost onAddPost={onHandleAddPost} />
                            </Route>
                            <Route path='/admin/post/edit/:id'>
                                <EditPost post={post} onUpdatePost={onHandleUpdatePost} />
                            </Route>
                        </Switch>
                    </MainAdmin>
                </Route>
                <Route>
                    <Main>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products} />
                            </Route>

                            <Route path="/singleproducts/:id">
                                <SingleProducts products={products} />
                            </Route>
                            <Route path="/blog" exact>
                                <Blog post={post} />
                            </Route>
                        </Switch>
                    </Main>
                </Route>

            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
