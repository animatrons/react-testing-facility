import Home from './Home';

function Feats() {


    if (Home.loginSuccess) {
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