import moment from "moment";
import "moment/locale/pt-br";

class Order {
  constructor(id, items, totalAmount, date) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmount;
    this.date = date;
  }

  get readableDate() {
    moment.locale("pt-br");
    //   return this.date.toLocaleDateString("pt-BR", {
    //     year: "numeric",
    //     month: "long",
    //     day: "numeric",
    //     hour: "2-digit",
    //     minute: "2-digit",
    //   });
    return moment(this.date).locale("pt").format("DD/MM/YYYY, HH:mm");
  }
}

export default Order;
