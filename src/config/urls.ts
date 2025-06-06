const pages = {
    product: 'product',
    catalog: 'catalog',
    forgotPassword: 'forgot-password',
    checkEmail: 'check-email',
    login: 'login',
    signUp: 'sign-up',
    brands: 'brands',
    search: 'search',
    brand: 'brand',
    userinfo: 'userinfo',
    companyInfo: 'company-info',
    orderHistory: 'order-history',
    accountActivation: 'account-activation',
    users: 'users',
    documents: 'documents',
    document: 'document',
    platformDocuments: 'platform-documents', // aka Digitrade documents
    platformDocument: 'platform-document', // aka Digitrade document
    orders: 'documents/orders/[id]',
    invoices: 'documents/invoices/[id]',
    deliveries: 'documents/deliveries/[id]',
    returns: 'documents/returns/[id]',
    quotations: 'documents/quotations/[id]',
  } as const;
  
  const client = {
    categoryTree: '/b2b-api/v1/category_tree',
    productList: '/b2b-api/v1/products',
    filterList: '/b2b-api/v1/filter_list',
    productPage: '/b2b-api/v1/product_page',
    brandsList: '/b2b-api/v1/brands',
    brand: '/b2b-api/v1/brand',
    promotionById: (id: number) => `/b2b-api/v1/promotion_details/${id}`,
    searchProductsByWord: '/b2b-api/v1/products/search',
    searchProductsByBrand: '/b2b-api/v1/products/brand',
    searchFiltersByWord: '/b2b-api/v1/filter_list/search_by_word',
    searchBrandFiltersByWord: '/b2b-api/v1/filter_list/search_by_brand',
  } as const;
  
  const customer = {
    cart: '/customer/v1/cart',
    cartPage: '/customer/v1/cart_page',
    addToCart: '/customer/v1/cart/add',
    register: '/customer/register',
    login: '/customer/login_check',
    updateCartProduct: (id: number) => `/customer/v1/cart/product/${id}/edit`,
    updateCart: (id: number) => `/customer/v1/cart/${id}/edit`,
    placeOrder: '/customer/v1/order',
    deleteProductFromCart: (id: number) =>
      `/customer/v1/cart/product/${id}/delete`,
    similarProducts: (id: number | string) =>
      `/b2b-api/v1/similar/${id}/products`,
    profileMenu: '/client_api_profile_menu',
    livePrice: '/customer/v1/live/product_price',
    liveStock: '/customer/v1/live/product_stock',
    sale_orders: '/customer/v1/live/sale_orders',
    accountActivationType: '/customer/v1/account_activation_type',
    accountActivation: '/customer/v1/account_activation',
    userInfo: '/customer/v1/default_erp_user',
    customerUser: '/customer/v1/customer_user',
    userCompanies: '/customer/v1/user_companies',
    switchUser: '/customer/v1/switch_user',
    documents: '/customer/v1/live_document',
    documentDetails: '/customer/v1/live_document_item',
    documentType: '/customer/v1/live_document_type',
    deliveryDate: '/customer/v1/delivery_date',
    orders: '/customer/v1/orders',
    cartType: '/customer/v1/enum/cartType',
    cartStatus: '/customer/v1/enum/cartStatus',
  } as const;
  
  const documents = {
    sale_order_details: '/customer/v1/live/sale_order_details',
    sale_order_lines: '/customer/v1/live/sale_order_lines',
    sale_orders: '/customer/v1/live/sale_orders',
    returns: '/customer/v1/live/returns',
    return_details: '/customer/v1/live/return_details',
    return_lines: '/customer/v1/live/return_lines',
    deliveries: '/customer/v1/live/deliveries',
    delivery_details: '/customer/v1/live/delivery_details',
    delivery_lines: '/customer/v1/live/delivery_lines',
    quotations: '/customer/v1/live/quotations',
    quotation_details: '/customer/v1/live/quotation_details',
    quotation_lines: '/customer/v1/live/quotation_lines',
    invoices: '/customer/v1/live/invoices',
    invoice_details: '/customer/v1/live/invoice_details',
    invoice_lines: '/customer/v1/live/invoice_lines',
    documents: '/customer/v1/live_document',
  } as const;
  const urls = {
    pages,
    client,
    customer,
    documents,
  } as const;
  
  export type AllUrls = typeof urls;
  export type PageUrls = typeof pages;
  export type ClientUrls = typeof client;
  export type CustomerUrls = typeof customer;
  export type DocumentsUrls = typeof documents;
  
  export default urls;
  
  // /customer_user
  // /default_erp_user
  // /user_companies
  