export default  {
  en: {
    productCount(a:any) {
      const isMaxValue = a.values.count > 10
      return `Products count: ${isMaxValue ? 'Too much' : a.values.count}`
    }
  }
}
