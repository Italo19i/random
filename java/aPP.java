package Execut;

public class aPP {
	
	public static void main(String... args) {
		double valor = 91.01;
		double[] cedulas = new double[]{100.00,50.00,20.00,10.00,5.00,2.00};
		double[] moedas = new double[] {1.00,0.50,0.25,0.10,0.05,0.01};
			
		
		if(valor > 0) {
			System.out.println("NOTAS:");
			for (int i = 0; i < cedulas.length; i++) {
				int cont = 0;
				while(valor >= cedulas[i]) {
					valor = valor - cedulas[i];
					cont++;
				};
				System.out.println(cont + " nota(s) de R$ "+ cedulas[i]);
			}
			
			System.out.println("MOEDAS:");
			
			for (int i = 0; i < moedas.length; i++) {
				int cont = 0;
				while(valor >= moedas[i]) {
					valor = valor - moedas[i];
					cont++;
				};
				System.out.println(cont + " moeda(s) de R$ "+ moedas[i]);
			}
			
		}else {
			System.out.println("Valor errado");
		}
		
	}
		
}
