import axios from 'axios'
import Cookies from 'js-cookie'

export async function refreshTokens() {
    try {
        const refreshToken = Cookies.get('refreshtoken')
        if (!refreshToken) throw new Error('리프레시 토큰 없음')
        const response = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/api/auth/refresh`,
            {
                refreshToken,
            }
        )
        const { accessToken, newRefreshToken } = response.data
        Cookies.set('accessToken', accessToken, {
            expires: 1,
            secure: true,
            sameSite: 'strict',
        })
        Cookies.set('refreshToken', newRefreshToken, {
            expires: 7,
            secure: true,
            sameSite: 'strict',
        })

        return accessToken
    } catch (error) {
        console.error('토큰 갱신 실패:', error)
        throw error
    }
}
