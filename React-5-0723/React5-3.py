# 전역 상태를 관리하는 클래스
class AppState:
    def __init__(self):
        self.position=0
        self.max_position =5

#전역 상태 인스턴스 생성
app_state = AppState()

def move_left():
    if app_state.position>0:
        app_state.position-=1
    print(f"왼쪽으로 이동했습니다. 현재 위치: {app_state.position}")
    
def move_right():
    if app_state.position < app_state.max_position:
        app_state.position+=1
    print(f"오른쪽으로 이동했습니다. 현재 위치: {app_state.position}")

def print_current_state():
    print(f"현재 위치: {app_state.position}")
    print("["+"0"* app_state.position+"X"+"O " * (app_state.max_position - app_state.position)+"]")

def handle_input(user_input):
    if user_input.lower() == 'left':
        move_left()
    elif user_input.lower() == 'right':
        move_right()
    else:
        print("잘못된 입력입니다. 'left' 또는 'right'를 입력해주세요.")
    print_current_state()

def main():
    print("상태 변경 데모에 오신 것을 환영합니다!")
    print("왼쪽으로 이동하려면 'left', 오른쪽으로 이동하려면 'right', 종료하려면 'q'를 입력하세요.")
    print_current_state()

    while True:
        user_input =input("이동 방향으로 입력하세요 (left/right) 또는 'q'로 종료: ")
        if user_input.lower()=='q':
            break
        handle_input(user_input)

    print('상태 변경 이해하기')
if __name__ == "__main__":
    main()