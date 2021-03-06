import Settings from "./Settings"

export default Object.create(null, {
    GET: {
        value: function (id) {
            return fetch(`${Settings.url}/${this.array}/${id}`)
                .then(r => r.json())
        }
    },
    GETALL: {
        value: function () {
            return fetch(`${Settings.url}/${this.array}`)
                .then(r => r.json())
        }
    },
    DELETE: {
        value: function(id) {
            return fetch(`${Settings.url}/${this.array}/${id}`,
            {
                method:"DELETE"
            })
        }
    }
})