import React, { useState, useEffect } from 'react';
import Routers from './routers';
import apiRequest from './api/productApi';
import apiCate from './api/categoryApi';
import apiPost from './api/postApi';
function App() {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([apiCate]);
  const [post, setPost] = useState([apiPost]);

  // Danh sách sản phẩm
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getProducts();
  }, []);

  // Danh sách bài viết
  useEffect(() => {
    const getPost = async () => {
      try {
        const { data } = await apiPost.getAll();
        setPost(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getPost();
  }, []);

  // Xóa sản phẩm
  const onHandleRemove = async (id) => {
    try {
      const { data } = await apiRequest.remove(id);
      const newProducts = products.filter((product) => product.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  // Thêm sản phẩm
  const onHandleAdd = async (product) => {
    try {
      const { data } = await apiRequest.create(product);
      setProducts([
        ...products,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  // Thêm bài viết
  const onHandleAddPost = async (posts) => {
    try {
      const { data } = await apiPost.createpost(posts);
      setPost([
        ...post,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }


  // Cập nhật product 
  const onHandleUpdate = (updateProduct) => {
    const newProducts = products.map(product => (
      product.id === updateProduct.id ? updateProduct : product  // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    ));
    localStorage.setItem('products', JSON.stringify(newProducts))
    setProducts(newProducts);
  }



  // danh mục
  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await apiCate.getAll();
        setCategory(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getCategory();
  }, []);


  // Xóa danh mục
  const onHandleRemoveCate = async (id) => {
    try {
      const { data } = await apiCate.remove(id);
      const newCategory = category.filter((categories) => categories.id !== id);
      setCategory(newCategory);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };


  // Xóa bài viết
  const onHandleRemovePost = async (id) => {
    try {
      const { data } = await apiPost.removepost(id);
      const newPost = post.filter((post) => post.id !== id);
      setPost(newPost);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };


  // Thêm danh mục
  const onHandleAddCate = async (categories) => {
    try {
      const { data } = await apiCate.create(categories);
      setCategory([
        ...category,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  // Cập nhật category
  const onHandleUpdateCate = (updateCate) => {
    const newCate = category.map(cate => (
      cate.id === updateCate.id ? updateCate : cate  // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    ));
    localStorage.setItem('category', JSON.stringify(newCate))
    setCategory(newCate);
  }
  // Cập nhật bài viết
  const onHandleUpdatePost = (updatePost) => {
    const newPost = post.map(post => (
      post.id === updatePost.id ? updatePost : post
    ));
    localStorage.setItem('post', JSON.stringify(newPost))
    setPost(newPost);
  }


  return (
    <div className="App">
      <Routers
        products={products} onRemove={onHandleRemove} onAdd={onHandleAdd} onUpdate={onHandleUpdate}
        category={category} onRemoveCate={onHandleRemoveCate} onAddCate={onHandleAddCate} onUpdateCate={onHandleUpdateCate}
        post={post} onAddPost={onHandleAddPost} onRemovePost={onHandleRemovePost} onUpdatePost={onHandleUpdatePost}
      />

    </div>
  )

}
export default App;