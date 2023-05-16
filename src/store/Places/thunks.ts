import { type AppThunk } from '../hooks'
import { setError, setPlace, startLoading } from './placesSlice'
import { getUserLocation } from '../../helpers/getUserLocation'

export const getLocation = (): AppThunk => async (dispatch) => {
  dispatch(startLoading())
  try {
    const location = await getUserLocation()
    dispatch(setPlace(location))
  } catch (error) {
    console.log(error)
    dispatch(setError('Error getting location'))
  }
}
