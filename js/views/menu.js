/**
 * Created by alyssa on 11/16/15.
 */

// views/menu.js
app.views.menu = Backbone.View.extend({
    template: _.template($("#tpl-menu").html()),
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template({}));
    }

});

// handles the view, insuring we only get one instance
var ViewsFactory = {
    menu: function() {
        if(!this.menuView) {
            this.menuView = new api.views.menu({
                el: $("#menu")
            });
        }
        return this.menuView;
    }
};

window.onload = function() {
    app.init();
}
