import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product } from './product.model';

@Injectable()
export class ProductsService {
	constructor(
		@InjectModel('Product') private readonly productModel: Model<Product>,
	) {}

	async insertProduct(
		title: string,
		desc: string,
		price: number,
	): Promise<string> {
		const newProduct = new this.productModel({ title, desc, price });
		const result = await newProduct.save();

		return result.id as string;
	}

	async getProducts() {
		const products = await this.productModel.find().exec();
		return products.map((prod) => ({
			id: prod.id,
			title: prod.title,
			desc: prod.desc,
			price: prod.price,
		}));
	}

	async getProduct(prodId: string) {
		const product = await this._findProduct(prodId);
		return {
			id: product.id,
			title: product.title,
			desc: product.desc,
			price: product.price,
		};
	}

	async updateProduct(
		prodId: string,
		title: string,
		desc: string,
		price: number,
	) {
		const updatedProduct = await this._findProduct(prodId);

		if (title) {
			updatedProduct.title = title;
		}
		if (desc) {
			updatedProduct.desc = desc;
		}
		if (price) {
			updatedProduct.price = price;
		}

		updatedProduct.save();
	}

	async deleteProduct(prodId: string) {
		await this.productModel.deleteOne({ _id: prodId }).exec();
	}

	private async _findProduct(id: string): Promise<Product> {
		let product;

		try {
			product = await this.productModel.findById(id);
		} catch (error) {
			throw new NotFoundException('Could not find a product.');
		}

		if (!product) {
			throw new NotFoundException('Could not find a product.');
		}

		return product;
	}
}