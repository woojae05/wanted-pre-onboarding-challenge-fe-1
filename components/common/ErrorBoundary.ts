import React from "react";

interface Props {
    fallback: React.ReactNode
    children: React.ReactNode

}


class ErrorBoundary extends React.Component<Props> {
    state = { hasError: false }

    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: any) {
        // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
    }

    render() {
        if (this.state.hasError) {
            // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
            return this.props.fallback;
        }

        return this.props.children;
    }
}

export default ErrorBoundary