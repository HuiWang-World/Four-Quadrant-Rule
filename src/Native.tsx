import './assets/styles/Navite.sass'

function Native() {
    return (
        <>
            {
                <div>
                    <div className="grid-container">
                        <div className="grid-card">
                            <label className="grid-label-urgent-important">紧急 & 重要</label>
                            <div className="grid-grid">标签2</div>
                        </div>
                        <div className="grid-card">
                            <label className="grid-label-not-urgent-important">不紧急 & 重要</label>
                            <div className="grid-grid">标签2</div>
                        </div>
                        <div className="grid-card">
                            <label className="grid-label-urgent-not-important">紧急 & 不重要</label>
                            <div className="grid-grid">标签2</div>
                        </div>
                        <div className="grid-card">
                            <label className="grid-label-not-urgent-not-important">不紧急 & 不重要</label>
                            <div className="grid-grid">标签2</div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}


export default Native
