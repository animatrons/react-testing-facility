import { useStore} from 'react-context-hook';

function Features() {
    const [logged, setLogState, deleteLog] = useStore('logged');

    if (logged) {
        return (
            <div className="content features">
                <div className="nav-banner" ></div>
                <div className="logged">
                    <h2>Wow! it worked</h2>
                </div>
            </div>

        )
    }
    return (
        <div className="content  features">
            <div className="not-logged">
                💢💢💢😠 Forgot to login again!! 😠💢💢💢
            </div>
        </div>
    )
}

export default Features;