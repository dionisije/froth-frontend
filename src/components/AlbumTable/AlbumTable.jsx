import React from "react";

const AlbumTable = ({data}) => (
    <>
        <h5>Found in {data.length} album title{data.length > 1 ? 's' : ''}...</h5>
        <table className="table" key="table">
            <thead>
                <tr key="header">
                    <th scope="col" key="#">#</th>
                    <th scope="col" key="A">Album</th>
                    <th scope="col" key="L">Link</th>
                </tr>
            </thead>
            <tbody key="body">
                {data.map((item, index) => 
                    <tr key={item._id}>
                        <th key={`${item._id}${index}####`} scope="row">{index + 1}</th>
                        <td key={`${item._id}${index}Albu`}>{item.Name}</td>
                        <td key={`${item._id}${index}Link`}><a href={`/albums/${item.Catalogue}`}>{item.Catalogue}</a></td>
                    </tr>
                )}
            </tbody>
        </table>
    </>
);

export default AlbumTable;
