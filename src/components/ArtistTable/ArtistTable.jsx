import React from "react";

const ArtistTable = ({data}) => (
    <>
        <h5>Found in {data.length} artist name{data.length > 1 ? 's' : ''}...</h5>
        <table className="table" key="table">
            <thead>
                <tr key="header">
                    <th scope="col" key="#">#</th>
                    <th scope="col" key="A">Artist</th>
                    <th scope="col" key="T">Track</th>
                    <th scope="col" key="L">Link</th>
                </tr>
            </thead>
            <tbody key="body">
                {data.map((item, index) => 
                    <tr key={item._id}>
                        <th key={`${item._id}${index}####`} scope="row">{index + 1}</th>
                        <td key={`${item._id}${index}Arti`}>{item.Artist}</td>
                        <td key={`${item._id}${index}Trac`}>{item.Name}</td>
                        <td key={`${item._id}${index}Link`}><a href={`/albums/${item.Catalogue}`}>{item.Catalogue}</a></td>
                    </tr>
                )}
            </tbody>
        </table>
    </>
);

export default ArtistTable;
