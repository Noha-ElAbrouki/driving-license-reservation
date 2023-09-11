const useSort = ({ order, isFieldNumeric, field, data }) => {


    if (isFieldNumeric) {
        const result = [...data].sort((a, b) => a[field] - b[field])

        return order === 'asc' ? result : result.reverse()
    }
    const result = [...data].sort((a, b) => {
        const newA = a[field].toUpperCase();
        const newB = b[field].toUpperCase();
        if (newA < newB) {
            return -1
        }
        if (newA > newB) {
            return 1
        }
        return 0
    })
    return order === 'asc' ? result : result.reverse()

}
export default useSort