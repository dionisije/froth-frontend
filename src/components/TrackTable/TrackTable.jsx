import React from "react";
import {secondsToTime} from "../../utilities/utils.js";

const TrackTable = ({data}) => {
    const discCount = data[0][0]['Disc Count'];

    return (
        <>
            {data.map((disc, index) => 
                <div key={`${disc[0]._id}${index}Div`}>
                    {discCount > 1 ? <h3 key={disc[0]._id}>Disc {disc[0].Disc}</h3> : null}
                    <table className="table" key={`${disc[0]._id}${index}Table`}>
                        <thead key={`${disc[0]._id}${index}Head`}>
                            <tr key="header">
                                <th scope="col" key="#">#</th>
                                <th scope="col" key="A">Artist</th>
                                <th scope="col" key="B">Track</th>
                                <th scope="col" key="C">Time</th>
                            </tr>
                        </thead>
                        <tbody key={`${disc[0]._id}${index}Body`}>
                            {disc.map((track, index) => 
                                <tr key={track._id}>
                                    <th scope="row" key={`${track._id}${index}#`}>{index + 1}</th>
                                    <td key={`${track._id}${index}Arti`}>{track.Artist}</td>
                                    <td key={`${track._id}${index}Name`}>{track.Name}</td>
                                    <td key={`${track._id}${index}Time`}>{secondsToTime(track.Time)}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>)
            }
        </>
    )
};

export default TrackTable;
