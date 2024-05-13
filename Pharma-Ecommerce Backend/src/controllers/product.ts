import { Request } from "express";
import { TryCatch } from "../middlewares/error.js";
import { NewProductRequestBody } from "../types/types.js";

import { Product } from "../models/product.js";
import ErrorHandler from "../utils/utility-class.js";
import { rm } from "fs";


export const newProduct = TryCatch(
    async (req: Request<{}, {}, NewProductRequestBody>, res, next) => {
      const { name, price, stock, category } = req.body;
      const photo = req.file;
  
      if (!photo) return next(new ErrorHandler("Please add Photo", 400));
  
      if (!name || !price || !stock || !category) {
        rm(photo.path, () => {
          console.log("Deleted");
        });
  
        return next(new ErrorHandler("Please enter All Fields", 400));
      }
  
      await Product.create({
        name,
        price,
        stock,
        category: category.toLowerCase(),
        photo: photo.path,
      });
  
  
      return res.status(201).json({
        success: true,
        message: "Product Created Successfully",
      });
    }
  );
  