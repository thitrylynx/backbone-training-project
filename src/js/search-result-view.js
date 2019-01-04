import { template } from "lodash";
import { $, jQuery } from "jquery";
import Backbone from "backbone";

class SearchResultView extends Backbone.View {
  constructor() {
    super({
      events: {
        "click .search-form__btn-more": "searchMore"
      },
      el: ".wrapper"
    });
  }
  initialize() {
    this.itemsBlock = this.$(".items");
    this.searchResultTemplate = template(this.$("#search-result").html())
  }
  render(collection) {
    const items = collection.toJSON()
    console.log(items)
    this.itemsBlock.html(this.searchResultTemplate({ items: items }));
  }
  searchMore() {
    this.$(".search-result--js").addClass( "hidden")
    this.$(".search-form--js").removeClass( "hidden")
  }
}

export default SearchResultView;