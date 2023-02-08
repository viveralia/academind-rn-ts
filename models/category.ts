export default class Category {
  id: string
  title: string
  color: string

  constructor(id: Category['id'], title: Category['title'], color: Category['color']) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}
