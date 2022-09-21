import { useRouter } from '@nuxtjs/composition-api'

export default function useNavigate() {
  const router = useRouter()

  const navigate = (path: string) => {
    router.push(path)
  }

  return {
    navigate,
  }
}
