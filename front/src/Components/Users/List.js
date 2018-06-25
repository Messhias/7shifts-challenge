import React,{Component} from 'react';
import {
  BootstrapTable,
  TableHeaderColumn
} from 'react-bootstrap-table';
import { Container, Row, Media } from 'reactstrap';
import Loading from '../LoadingAnimation';

export default class List extends Component {
    constructor(props){
    	super(props);
      this.userPhoto = this.userPhoto.bind(this);
      this.onRowClick = this.onRowClick.bind(this);
    }

    isActive(cell, row) {
        if (row.active) {
            return 'Active';
        }

        return 'Inactive';
    }

    hourlyFormat(cell, row) {
        return `$ ${row.hourlyWage}`;
    }

    userPhoto(cell, row)
    {
        return (
          <Media>
             <Media>
               <Media
                 src={`${row.photo}`} alt={`${row.firstName} photo's`}
                 className='img-reponse rounded-photo max-height-80'
                />
             </Media>
          </Media>
        );
    }

    onRowClick(row) {
        if (row.id) {
            this.changePage(row.id);
        }
    }

    changePage(id) {
        this.props.history.push(`user/details/${id}`);
    }

    render() {
        const {
            data,
            isDetail
        } = this.props;

        const options = {
            noDataText: "Loading...",
            onRowClick: !isDetail ? this.onRowClick : null
        };

        if (data.length < 0) {
            return <Loading />
        }

        return (
            <Container
              className="mg-tp-60"
            >
                <Row>
                  <p>
                    Click in the row to see the user's reports.
                  </p>
                </Row>
                <Row>
                    <BootstrapTable
                        search={isDetail ? true : false }
                        multiColumnSearch
                        searchPlaceholder='Search'
                        data={data}
                        hover={true}
                        bordered={false}
                        tableHeaderClass="table-header"
                        options={options}
                        trClassName="hover middle"
                    >
                        <TableHeaderColumn
                            width="10%"
                            dataSort={true}
                            isKey={true}
                            editable={false}
                            dataField="id"
                        >
                            #
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            width="20%"
                            dataSort={true}
                            editable={true}
                            dataField="photo"
                            dataFormat={this.userPhoto.bind(this)}
                        >
                          Photo
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            width="20%"
                            dataSort={true}
                            editable={true}
                            dataField="firstName"
                        >
                          First Name
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            width="20%"
                            dataSort={true}
                            editable={true}
                            dataField="lastName"
                        >
                          Last Name
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            width="20%"
                            dataSort={true}
                            editable={true}
                            dataField="email"
                        >
                          Email
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            width="10%"
                            dataSort={true}
                            editable={true}
                            dataFormat={this.hourlyFormat.bind(this)}
                            dataField="hourlyWage"
                        >
                          Hourly Wage
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            width="20%"
                            dataSort={true}
                            editable={true}
                            dataField="active"
                            dataFormat={this.isActive.bind(this)}
                        >
                          Status
                        </TableHeaderColumn>
                    </BootstrapTable>
                </Row>
            </Container>
        );
    }
}
