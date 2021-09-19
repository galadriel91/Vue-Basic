import ListPage from '@/pages/ListPage';
import bus from '@/utils/bus'

export default function createListView(name){
    return{
        name,
        created(){
            this.$store.dispatch('GET_LISTS' , this.$route.name)
        },
        render(createElement){
            return createElement(ListPage)
        }
    }
}