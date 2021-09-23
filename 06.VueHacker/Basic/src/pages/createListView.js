import ListPage from '@/pages/ListPage';
import bus from '@/utils/bus'

export default function createListView(name){
    return{
        name,
        mounted(){
            bus.$emit('endSpin');
        },
        render(createElement){
            return createElement(ListPage)
        }
    }
}