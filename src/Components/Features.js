import Home from './Home';
import { useStore, withStore} from 'react-context-hook';

function Feats() {

    const [logged, setLogState, deleteLog] = useStore('logged');

    if (logged) {
        return (
            <div className="content">
                <div>
                    Wow! it worked
                </div>
            </div>

        )
    }
    return (
        <div className="content">
            <div >
            💢💢💢😠
            </div>
        </div>
    )
}

export default Feats;