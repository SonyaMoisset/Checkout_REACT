import React from 'react'

const ExpiryDate = () => (
    <div className="expiry-date">
        <div>
            <label>Expire on</label>
            <div className="expiry">
                <select>
                    <option value="">January</option>
                    <option value="">February</option>
                    <option value="">March</option>
                    <option value="">April</option>
                    <option value="">May</option>
                    <option value="">June</option>
                    <option value="">July</option>
                    <option value="">August</option>
                    <option value="">September</option>
                    <option value="">October</option>
                    <option value="">November</option>
                    <option value="">December</option>
                </select>

                <select>
                    <option value="">2017</option>
                    <option value="">2018</option>
                    <option value="">2019</option>
                    <option value="">2020</option>
                    <option value="">2021</option>
                </select>
            </div>
        </div>
        <div className="cvc-field">
            <label>CVC</label>
            <input
                placeholder="000"
                type="number" />
        </div>
    </div>
)

export default ExpiryDate