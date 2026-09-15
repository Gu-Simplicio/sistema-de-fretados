async function logar() {
    const username = document.getElementById('Usuario').value.trim();
    const password = document.getElementById('Senha').value.trim();

    if (!username || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const data = new URLSearchParams();
    data.append('username', username);
    data.append('password', password);

    try {
        const response = await fetch('login.php', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: data.toString(),
        });

        if (!response.ok) {
            throw new Error('Resposta inválida do servidor.');
        }

        const result = await response.json();
        

        if (result.data === 'usuario ou senha incorretos') {
            alert('Usuário ou senha incorretos.');
            return;
        }

        const usuario = result.data[0];
        const tipo = (usuario.Tipo || usuario.tipo || '').toString().trim();

        if (tipo === 'Empresa') {
            window.location.href = 'empresa.html';
        } else if (tipo === 'Aluno') {
            window.location.href = 'aluno.html';
        } else if (tipo === 'Motorista') {
            window.location.href = 'Motorista.html';
        } else {
            alert('Tipo de usuário não reconhecido: ' + tipo);
        }
    } catch (error) {
        console.error('Erro ao realizar login:', error);
        alert('Ocorreu um erro ao tentar realizar o login.');
        console.log(result);
    }
}