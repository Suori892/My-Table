import React from 'react'

const StaticTable = () => {
  const tableData = [
    //row 1
    {
      referralEvent: {
        type: 'Purchase',
        date: '06/17/2020 at 7:13 PM PDT',
        amount: '$120.00',
      },
      advocate: {
        email: 'autouser23926@gmail....',
        type: 'Advocate',
      },
      friend: {
        email: 'fr58272@gmail.com',
        type: 'Friend',
      },
      referralStatus: {
        title: 'Pending',
        status: 'Passed fraud checks',
      },
    },
    //row 2
    {
      referralEvent: {
        type: 'Purchase',
        date: '07/10/2020 at 4:05 AM PDT',
        amount: '$100.00',
      },
      advocate: {
        email: 'ad0379118142@gmail.c...',
        type: 'Advocate',
      },
      friend: {
        email: 'fr0379118142@gmail.com',
        type: 'Friend',
      },
      referralStatus: {
        title: 'Flagged',
        status: 'Marked as fraud',
      },
    },
    //row 3
    {
      referralEvent: {
        type: 'Purchase',
        date: '06/09/2020 at 12:42 PM PDT',
        amount: '$28.00',
      },
      advocate: {
        email: 'ad56991@gmail.com',
        type: 'Advocate',
      },
      friend: {
        email: 'fr94250@gmail.com',
        type: 'Friend',
      },
      referralStatus: {
        title: 'Approved',
        status: 'Passed fraud checks',
      },
    },
    //row 4
    {
      referralEvent: {
        type: 'Purchase',
        date: '08/07/2020 at 4:20 AM PDT',
        amount: '$100.00',
      },
      advocate: {
        email: 'user.to.be.blocked92187..',
        type: 'Advocate',
      },
      friend: {
        email: 'user.to.be.blocked2682..',
        type: 'Friend',
      },
      referralStatus: {
        title: 'Blocked',
        status: 'Marked as fraud',
      },
    },
    //row 5
    {
      referralEvent: {
        type: 'Purchase',
        date: '06/09/2020 at 2:08 AM PDT',
        amount: '$100.00',
      },
      advocate: {
        email: 'ad0693677382@gmail....',
        type: 'Advocate',
      },
      friend: {
        email: 'fr0693677382@gmail.c...',
        type: 'Friend',
      },
      referralStatus: {
        title: 'Voided',
        status: 'Marked as fraud',
      },
    },
  ]

  return (
    <div className="table-container">
      <h1>Referrals - 345</h1>
      <table>
        <thead>
          <tr>
            <th>Referral event</th>
            <th>Advocate</th>
            <th>Friend</th>
            <th>Referral status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>
                <div>
                  <div className="title">{row.referralEvent.type}</div>
                  <div className="time-stamp">{row.referralEvent.date}</div>
                  <div className="money">{row.referralEvent.amount}</div>
                </div>
              </td>
              <td>
                <div>
                  <div className="title">{row.advocate.email}</div>
                  <div>{row.advocate.type}</div>
                </div>
              </td>
              <td>
                <div>
                  <div className="title">{row.friend.email}</div>
                  <div>{row.friend.type}</div>
                </div>
              </td>
              <td>
                <div>
                  <div className="title">{row.referralStatus.title}</div>
                  <div
                    style={{
                      color: getStatusColor(row.referralStatus.status),
                    }}
                  >
                    {row.referralStatus.status}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  function getStatusColor(status) {
    if (status === 'Passed fraud checks') {
      return 'gray'
    } else {
      return '#d62747'
    }
  }
}

export default StaticTable
