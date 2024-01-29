function WeatherPage() {
    return (
        <div className="container-fluid mt-4"> 
        {/* style={{ backgroundColor: '#343d46'}}> */}
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Search ZIP Code..." />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12 col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">City Name</h5>
                            <p className="card-text">Temperature: XY°F</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Daily Forecast</h5>
                            <p className="card-text">put forecast    data here.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Air Conditions</h5>
                            <p className="card-text">put air conditions here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherPage;
