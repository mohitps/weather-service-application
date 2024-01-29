function Workouts() {
    return (
        <div className="workouts">
            <div>Rainy Conditions, stay inside</div>
            <div className="workout-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Exercise</th>
                            <th scope="col">Reps</th>
                            <th scope="col">Sets</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Lat Pulldown</td>
                            <td>8-12</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Barbell Bicep Curls</td>
                            <td>10</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Calf Raises</td>
                            <td>20+</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Calf Raises</td>
                            <td>until failure</td>
                            <td>3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Workouts;
