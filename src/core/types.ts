//Brand types
export type IBrands = {
	id: number
	name: string
	image: string
	description?: string
}

//Categories types.
export type IParent = {
	id?: number
	title: string
	slug?: string
	image?: string
}

export type ICategories = {
	id?: number
	title: string
	slug?: string
	image?: string
	products?: Array<number>
	children?: Array<number>
}

export type ICategoryProducts = {
	count?: number
	next?: string | null
	previous?: string | null
	results?: IProducts[]
}

export type IBrandProducts = {
	count?: number
	next?: string | null
	previous?: string | null
	results?: IProducts[]
}


//Product types.
export interface IDocumentation {
	id: number
	file: string
	product: number
}



export interface ISchemes {
	id: number
	image: string
	product: number
}

export interface IImages {
	id: number
	images: string
}

export type IProducts = {
	id?: number
	title: string
	slug?: string
	article: string
	code: string
	description?: string
	characteristics?: any
	category: number
	brand: number
	photo?: string
	price?: number
	documentation?: IDocumentation[]
	schemes?: ISchemes[]
	images?: IImages[]
}