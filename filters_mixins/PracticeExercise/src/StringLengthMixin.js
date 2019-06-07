export const StringLengthMixin = {

    data() {
        return {
            mixin_text: 'Mixin Text'
        }
    },
    computed: {
        mixin_text_length() {
            return this.mixin_text + ' (' + this.mixin_text.length + ')'
        }
    }

}