const mongoose = require("mongoose");
const ProductCollection = require("../../models/ProductSchema");
const getproductcontroller = async (req, res) => {
  try {
    const {category, sub_category, name } = req.params;
    let products;
    if(category){
      const searchcategory = category.toLowerCase()();
      products = await ProductCollection.find({
        category: {$regex: new RegExp(searchcategory, "i")},
      });
    }

    else if(name){
      const searchname = name.toLowerCase()();
      products = await ProductCollection.find({
        category: {$regex: new RegExp(searchname, "i")},
      });
    }

    else if(sub_category){
      const searchsubcategory = subcategory.toLowerCase()();
      products = await ProductCollection.find({
        sub_category: {$regex: new RegExp(searchsubcategory, "i")},
      });
    }
    else{
    products = await ProductCollection.find();
    console.log(`Product fetched successfully`);
    }
    if(!products || products.length == 0)
      return res.status(404).send({message: "Product not found"});
    res.status(200).send(products);

  } catch (error) {
    res.status(504).send({
      message: "Error fetching products",
    });
    console.log(`Error Occured :${error}`);
  }
};
module.exports = getproductcontroller;
